import React from 'react';

interface Property {
  id: number;
  title: string;
  price: string;
  type: 'sale' | 'rent' | 'commercial';
  category: 'house' | 'apartment' | 'residential';
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  agent: {
    name: string;
    avatar: string;
  };
  description: string;
  mediaCount: number;
  latitude: string;
  longitude: string;
}

const BrowseHotProperties: React.FC = () => {
  const properties: Property[] = [
    {
      id: 1,
      title: "Gorgeous House For Sale",
      price: "$ 500,000",
      type: "sale",
      category: "house",
      location: "40 Journal Square, NJ, USA",
      bedrooms: 2,
      bathrooms: 2,
      area: "150 ft2",
      image: "/images/all/1.jpg",
      agent: {
        name: "Niko Furingee",
        avatar: "/images/avatar/1.jpg"
      },
      description: "Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a consectetur nulla.",
      mediaCount: 13,
      latitude: "40.72956781",
      longitude: "-73.99726866"
    },
    {
      id: 2,
      title: "Kayak Point House",
      price: "$ 1500 / per month",
      type: "rent",
      category: "apartment",
      location: "70 Bright St, Jersey City, NJ USA",
      bedrooms: 1,
      bathrooms: 1,
      area: "70 ft2",
      image: "/images/all/1.jpg",
      agent: {
        name: "Andy Sposty",
        avatar: "/images/avatar/1.jpg"
      },
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla.",
      mediaCount: 5,
      latitude: "40.88496706",
      longitude: "-73.88191222"
    },
    {
      id: 3,
      title: "Luxury Family Home",
      price: "$ 450,000",
      type: "sale",
      category: "apartment",
      location: "W 85th St, New York, USA",
      bedrooms: 2,
      bathrooms: 1,
      area: "150 ft2",
      image: "/images/all/1.jpg",
      agent: {
        name: "Anna Lips",
        avatar: "/images/avatar/1.jpg"
      },
      description: "Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a consectetur nulla.",
      mediaCount: 7,
      latitude: "40.94982541",
      longitude: "-73.84357452"
    },
    {
      id: 4,
      title: "Urban House for Rent",
      price: "$ 130,000",
      type: "rent",
      category: "house",
      location: "75 Prince St, NY, USA",
      bedrooms: 2,
      bathrooms: 1,
      area: "110 ft2",
      image: "/images/all/1.jpg",
      agent: {
        name: "Viki Morintagee",
        avatar: "/images/avatar/1.jpg"
      },
      description: "Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a consectetur nulla.",
      mediaCount: 11,
      latitude: "40.72228267",
      longitude: "-73.99246214"
    },
    {
      id: 5,
      title: "Family House for Rent",
      price: "$ 500 / per month",
      type: "rent",
      category: "residential",
      location: "34-42 Montgomery St, NY, USA",
      bedrooms: 2,
      bathrooms: 2,
      area: "90 ft2",
      image: "/images/all/1.jpg",
      agent: {
        name: "Lisa Archer",
        avatar: "/images/avatar/1.jpg"
      },
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla.",
      mediaCount: 8,
      latitude: "40.88496706",
      longitude: "-73.88191222"
    }
  ];

  const filters = [
    { id: '*', label: 'All Properties' },
    { id: '.cat-sale', label: 'Sale' },
    { id: '.cat-rent', label: 'Rent' },
    { id: '.cat-comercial', label: 'Comercial' }
  ];

  const getGridItemClasses = (property: Property, index: number) => {
    const classes = ['listing-grid-item'];
    
    // Match the exact pattern from original template
    if (index === 0) {
      // First item: "listing-grid-item" (no additional classes)
      // Keep classes as is
    } else if (index === 1) {
      // Second item: "listing-grid-item cat-sale cat-rent"
      classes.push('cat-sale', 'cat-rent');
    } else if (index === 2) {
      // Third item: "listing-grid-item cat-sale"
      classes.push('cat-sale');
    } else if (index === 3) {
      // Fourth item: "listing-grid-item cat-rent"
      classes.push('cat-rent');
    } else if (index === 4) {
      // Fifth item: "listing-grid-item cat-rent cat-comercial"
      classes.push('cat-rent', 'cat-comercial');
    } else {
      // For any additional items, apply based on type and category
      if (property.type === 'sale') classes.push('cat-sale');
      if (property.type === 'rent') classes.push('cat-rent');
      if (property.category === 'apartment' || property.category === 'residential') classes.push('cat-comercial');
    }
    
    return classes.join(' ');
  };

  const getListingItemClasses = (property: Property, index: number) => {
    const classes = ['listing-item'];
    
    // Match the exact pattern from original template
    if (index === 0) {
      // First item: "cat-comercial cat-sale"
      classes.push('cat-comercial', 'cat-sale');
    } else if (index === 1) {
      // Second item: no additional classes (just "listing-item")
      // Keep classes as is
    } else if (index === 2) {
      // Third item: no additional classes (just "listing-item")
      // Keep classes as is
    } else if (index === 3) {
      // Fourth item: no additional classes (just "listing-item")
      // Keep classes as is
    } else {
      // For any additional items, apply based on type
      if (property.type === 'sale') classes.push('cat-sale');
      if (property.type === 'rent') classes.push('cat-rent');
      if (property.category === 'apartment' || property.category === 'residential') classes.push('cat-comercial');
    }
    
    return classes.join(' ');
  };

  return (
    <div className="main-content ms_vir_height" id="sec1">
      <div className="boxed-container">
        <div className="listing-grid_heroheader">
          <h3>Browse Hot  Properties</h3>
          <div className="gallery-filters">
            {filters.map((filter) => (
              <a 
                key={filter.id}
                href="#" 
                className={`gallery-filter ${filter.id === '*' ? 'gallery-filter-active' : ''}`}
                data-filter={filter.id}
              >
                {filter.label}
              </a>
            ))}
          </div>
        </div>
        
        <div className="listing-grid gisp">
          {properties.map((property, index) => (
            <div key={property.id} className={getGridItemClasses(property, index)}>
              <div className={getListingItemClasses(property, index)}>
                <div className="geodir-category-listing">
                  <div className="geodir-category-img">
                    <a href="listing-single.html" className="geodir-category-img_item">
                      <div 
                        className="bg" 
                        data-bg={property.image}
                        style={{ backgroundImage: `url(${property.image})` }}
                      ></div>
                      <div className="overlay"></div>
                    </a>
                    <div className="geodir-category-location">
                      <a 
                        href="#4" 
                        className="map-item tolt single-map-item" 
                        data-newlatitude={property.latitude}
                        data-newlongitude={property.longitude}
                        data-microtip-position="top" 
                        data-tooltip="On the map"
                      >
                        <i className="fas fa-map-marker-alt"></i>  {property.location}
                      </a>
                    </div>
                    <ul className="list-single-opt_header_cat">
                      <li><a href="#" className="cat-opt">{property.type.charAt(0).toUpperCase() + property.type.slice(1)}</a></li>
                      <li><a href="#" className="cat-opt">{property.category.charAt(0).toUpperCase() + property.category.slice(1)}</a></li>
                    </ul>
                    <a href="#" className="geodir_save-btn tolt" data-microtip-position="left" data-tooltip="Save">
                      <span><i className="fal fa-heart"></i></span>
                    </a>
                    <div className="geodir-category-listing_media-list">
                      <span><i className="fas fa-camera"></i> {property.mediaCount}</span>
                    </div>
                  </div>
                  
                  <div className="geodir-category-content">
                    <h3><a href="listing-single.html">{property.title}</a></h3>
                    <div className="geodir-category-content_price">{property.price}</div>
                    <p>{property.description}</p>
                    <div className="geodir-category-content-details">
                      <ul>
                        <li><i className="fa-light fa-bed"></i><span>{property.bedrooms}</span></li>
                        <li><i className="fa-light fa-bath"></i><span>{property.bathrooms}</span></li>
                        <li><i className="fa-light fa-chart-area"></i><span>{property.area}</span></li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="geodir-category-footer">
                    <a href="agent-single.html" className="gcf-company">
                      <img src={property.agent.avatar} alt="" />
                      <span>By {property.agent.name}</span>
                    </a>
                    <a 
                      href="listing-single.html" 
                      className="gid_link"
                      data-newlatitude={property.latitude}
                      data-newlongitude={property.longitude}
                    >
                      <span>View Details</span> <i className="fa-solid fa-caret-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <a href="listing.html" className="commentssubmit csb-no-align">
          View All Properties <i className="fa-solid fa-caret-right"></i>
        </a>
      </div>
    </div>
  );
};

export default BrowseHotProperties;