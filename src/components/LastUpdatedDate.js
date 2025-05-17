import React from 'react';
import { format, parse } from 'date-fns';
import ru from 'date-fns/locale/ru';

export default function LastUpdatedDate({ date }) {
  if (!date) {
    return null;
  }
  
  try {
    const dateObj = parse(date, 'yyyy-MM-dd', new Date());
    const formattedDate = format(dateObj, 'd MMMM yyyy');
    
    return (
      <div style={{ 
        marginBottom: '1rem', 
        color: 'var(--ifm-color-gray-600)',
        fontSize: '0.875rem'
      }}>
        Last update: {formattedDate}
      </div>
    );
  } catch (error) {
    console.error('Error parsing date:', error);
    return null;
  }
}