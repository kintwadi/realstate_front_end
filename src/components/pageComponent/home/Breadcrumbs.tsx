import React from 'react';

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
  currentPage: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, currentPage }) => {
  return (
    <div className="breadcrumbs-list bl_flat">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <a href={item.href}>{item.label}</a>
          ) : (
            <span>{item.label}</span>
          )}
        </React.Fragment>
      ))}
      <span>{currentPage}</span>
      <div className="breadcrumbs-list_dec">
        <i className="fa-thin fa-arrow-up"></i>
      </div>
    </div>
  );
};

export default Breadcrumbs;