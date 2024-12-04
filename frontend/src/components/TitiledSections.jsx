import React from 'react';
import Typography from '@mui/material/Typography';

const DepartmentSection = ({ departments }) => {
  const departmentStyle = {
    flexBasis: '33.33%',
    padding: '10px',
    color: '#333', // Font color for categories
    fontFamily: 'inherit', // Font family
    boxSizing: 'border-box',
    marginTop: '3px', // Add margin
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {departments.map((department, index) => (
        <div key={index} style={departmentStyle}>
          <Typography variant="h6" gutterBottom style={{ color: '#0077b6', fontWeight: 'bold', marginBottom: '10px' }}>
            {department.name}
          </Typography>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {department.categories.map((category, subIndex) => (
              <li key={subIndex}>
                <a href={`/category/${category}`} style={{ color: '#333', fontFamily: 'inherit', textDecoration: 'none' }}>
                  <span onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
                    {category}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const departments = [
  {
    name: 'Furniture',
    categories: ['Bookcases', 'Chairs', 'Tables']
  },
  {
    name: 'Grocery',
    categories: ['Dairy', 'Beans', 'Pasta', 'Paper products', 'Cleaning supplies']
  },
  {
    name: 'Office Supplies',
    categories: ['Desk Supplies', 'Filing Supplies', 'Paper & Pads', 'Binding Supplies', 'Stationery Supplies']
  },
  {
    name: 'Clothing',
    categories: ['Shoes', 'Socks', 'Dresses', 'Jackets', 'Shorts', 'Shirts']
  },
  {
    name: 'Electronics',
    categories: ['Computers', 'TV', 'Phones', 'Sound System']
  },
  {
    name: 'Appliances',
    categories: ['Refrigerators', 'Dishwashers', 'Microwaves', 'Washers', 'Dryers']
  }
];

const TitledSections = () => {
  const sectionHeadingStyle = {
    color: '#0077b6', // Font color for section heading
    fontFamily: 'inherit', // Font family
    marginBottom: '10px', // Add margin
    padding: '10px',
    fontWeight: 'bold',
    borderBottom: '1px solid #0077b6', // Add border bottom
  };

  const wrapperStyle = {
    padding: '0 20px', // Add padding to create gap from screen edges
  };
  
  return (
    <div style={wrapperStyle}>
      <Typography variant="h5" gutterBottom style={sectionHeadingStyle}>
        Featured Categories
      </Typography>
      <DepartmentSection departments={departments.slice(0, 3)} />
      <DepartmentSection departments={departments.slice(3, 6)} />
    </div>
  );
};

export default TitledSections;
