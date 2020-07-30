ALTER TABLE restaurants
ADD COLUMN owner_id INTEGER REFERENCES owners(id) ON DELETE CASCADE;

UPDATE restaurants
SET owner_id = (SELECT MIN(id) FROM owners);

ALTER TABLE restaurants
ALTER COLUMN owner_id SET NOT NULL;