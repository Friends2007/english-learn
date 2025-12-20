
-- Create creators table
CREATE TABLE public.creators (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  image_url TEXT,
  telegram_link TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.creators ENABLE ROW LEVEL SECURITY;

-- Anyone can view creators
CREATE POLICY "Anyone can view creators"
ON public.creators
FOR SELECT
USING (true);

-- Only admins can manage creators
CREATE POLICY "Admins can insert creators"
ON public.creators
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update creators"
ON public.creators
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete creators"
ON public.creators
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for updated_at
CREATE TRIGGER update_creators_updated_at
BEFORE UPDATE ON public.creators
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for creator images
INSERT INTO storage.buckets (id, name, public) VALUES ('creator-images', 'creator-images', true);

-- Storage policies
CREATE POLICY "Anyone can view creator images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'creator-images');

CREATE POLICY "Admins can upload creator images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'creator-images');

CREATE POLICY "Admins can update creator images"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'creator-images');

CREATE POLICY "Admins can delete creator images"
ON storage.objects
FOR DELETE
USING (bucket_id = 'creator-images');
