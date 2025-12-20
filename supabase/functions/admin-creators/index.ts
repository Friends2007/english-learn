import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { password, action, creatorData, creatorId } = await req.json();
    const adminPassword = Deno.env.get('ADMIN_PASSWORD');

    console.log(`Admin creators action: ${action}`);

    if (password !== adminPassword) {
      return new Response(
        JSON.stringify({ success: false, error: "Wrong password" }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    let result;

    switch (action) {
      case 'create':
        result = await supabase.from('creators').insert({
          name: creatorData.name,
          image_url: creatorData.image_url,
          telegram_link: creatorData.telegram_link,
        }).select().single();
        break;

      case 'update':
        result = await supabase.from('creators').update({
          name: creatorData.name,
          image_url: creatorData.image_url,
          telegram_link: creatorData.telegram_link,
        }).eq('id', creatorId).select().single();
        break;

      case 'delete':
        result = await supabase.from('creators').delete().eq('id', creatorId);
        break;

      case 'list':
        result = await supabase.from('creators').select('*').order('created_at', { ascending: true });
        break;

      default:
        return new Response(
          JSON.stringify({ success: false, error: 'Invalid action' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }

    if (result.error) {
      console.error('Database error:', result.error);
      return new Response(
        JSON.stringify({ success: false, error: result.error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Action ${action} completed successfully`);
    return new Response(
      JSON.stringify({ success: true, data: result.data }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: unknown) {
    console.error('Error in admin-creators function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
