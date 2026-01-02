/*
  # Restaurant Website Database Schema

  ## Overview
  This migration creates the database structure for a restaurant website,
  allowing data to persist and be managed through the database instead of
  being hardcoded in the application.

  ## New Tables

  ### 1. `restaurant_info`
  Stores basic restaurant information (name, description, hours, contact)
  - `id` (uuid, primary key)
  - `name` (text) - Restaurant name
  - `tagline` (text) - Marketing tagline
  - `description` (text) - About section content
  - `phone` (text) - Contact phone number
  - `email` (text) - Contact email
  - `hours` (jsonb) - Operating hours by day
  - `logo_url` (text) - URL to logo image
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 2. `menu_categories`
  Organizes menu items into categories (Appetizers, Entrees, etc.)
  - `id` (uuid, primary key)
  - `name` (text) - Category name
  - `description` (text) - Category description
  - `display_order` (integer) - Sort order for display
  - `created_at` (timestamptz)

  ### 3. `menu_items`
  Individual menu items with pricing and descriptions
  - `id` (uuid, primary key)
  - `category_id` (uuid, foreign key) - Links to menu_categories
  - `name` (text) - Item name
  - `description` (text) - Item description
  - `price` (decimal) - Item price
  - `image_url` (text) - URL to item image
  - `is_featured` (boolean) - Whether to highlight this item
  - `is_available` (boolean) - Whether item is currently available
  - `display_order` (integer) - Sort order within category
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 4. `gallery_images`
  Photo gallery images
  - `id` (uuid, primary key)
  - `title` (text) - Image title/caption
  - `image_url` (text) - URL to image
  - `display_order` (integer) - Sort order for display
  - `created_at` (timestamptz)

  ### 5. `reviews`
  Customer reviews and testimonials
  - `id` (uuid, primary key)
  - `customer_name` (text) - Name of reviewer
  - `rating` (integer) - Rating (1-5 stars)
  - `review_text` (text) - Review content
  - `is_featured` (boolean) - Whether to display prominently
  - `created_at` (timestamptz)

  ### 6. `locations`
  Restaurant location information
  - `id` (uuid, primary key)
  - `name` (text) - Location name
  - `address` (text) - Street address
  - `city` (text)
  - `state` (text)
  - `zip_code` (text)
  - `phone` (text) - Location-specific phone
  - `latitude` (decimal) - For map integration
  - `longitude` (decimal) - For map integration
  - `hours` (jsonb) - Location-specific hours
  - `is_primary` (boolean) - Main location flag
  - `created_at` (timestamptz)

  ## Security
  - All tables have RLS enabled
  - Public read access (SELECT) for all tables
  - No write access from public (admin panel would need auth)

  ## Notes
  - Using UUIDs for all primary keys
  - JSONB for flexible hours storage
  - Timestamps for audit trail
  - Display order fields for custom sorting
*/

-- Create restaurant_info table
CREATE TABLE IF NOT EXISTS restaurant_info (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  tagline text DEFAULT '',
  description text DEFAULT '',
  phone text DEFAULT '',
  email text DEFAULT '',
  hours jsonb DEFAULT '{}',
  logo_url text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create menu_categories table
CREATE TABLE IF NOT EXISTS menu_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text DEFAULT '',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create menu_items table
CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES menu_categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text DEFAULT '',
  price decimal(10,2) NOT NULL DEFAULT 0,
  image_url text DEFAULT '',
  is_featured boolean DEFAULT false,
  is_available boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create gallery_images table
CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text DEFAULT '',
  image_url text NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  rating integer NOT NULL DEFAULT 5,
  review_text text NOT NULL,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT rating_check CHECK (rating >= 1 AND rating <= 5)
);

-- Create locations table
CREATE TABLE IF NOT EXISTS locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  zip_code text NOT NULL,
  phone text DEFAULT '',
  latitude decimal(10,8),
  longitude decimal(11,8),
  hours jsonb DEFAULT '{}',
  is_primary boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE restaurant_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to restaurant_info"
  ON restaurant_info FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public read access to menu_categories"
  ON menu_categories FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public read access to menu_items"
  ON menu_items FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public read access to gallery_images"
  ON gallery_images FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public read access to reviews"
  ON reviews FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public read access to locations"
  ON locations FOR SELECT
  TO anon
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_menu_items_category_id ON menu_items(category_id);
CREATE INDEX IF NOT EXISTS idx_menu_items_featured ON menu_items(is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_reviews_featured ON reviews(is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_locations_primary ON locations(is_primary) WHERE is_primary = true;