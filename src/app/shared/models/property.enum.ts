/**
 * Defines the types of property listings.
 * Must match the backend enum.
 */
export enum PropertyType {
    SALE = 'SALE',
    RENT = 'RENT',
    COMMERCIAL = 'COMMERCIAL'
}

/**
 * Defines the categories of properties.
 * Must match the backend enum.
 */
export enum PropertyCategory {
    HOUSE = 'HOUSE',
    APARTMENT = 'APARTMENT',
    HOTEL = 'HOTEL',
    VILLA = 'VILLA',
    OFFICE = 'OFFICE',
    LAND = 'LAND'
}

/**
 * Defines the current status of a property.
 * Must match the backend enum.
 */
export enum PropertyStatus {
    AVAILABLE = 'AVAILABLE',
    PENDING = 'PENDING',
    SOLD = 'SOLD',
    RENTED = 'RENTED'
}
