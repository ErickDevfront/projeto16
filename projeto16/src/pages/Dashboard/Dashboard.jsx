import React from 'react';
import PageExemplo from '../PageExemplo/PageExemplo.jsx';
import Card from '../../Components/Card/Card.jsx';
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <PageExemplo titulo="Dashboard">
      <div className={styles.cardGrid}>
        <Card 
          title="Analytics" 
          content="View your website analytics and performance metrics." 
        />
        <Card 
          title="Users" 
          content="Manage user accounts and permissions." 
        />
        <Card 
          title="Products" 
          content="Add, edit, or remove products from your catalog." 
        />
        <Card 
          title="Orders" 
          content="Track and manage customer orders." 
        />
        <Card 
          title="Reports" 
          content="Generate detailed reports and insights." 
        />
        <Card 
          title="Settings" 
          content="Configure application settings and preferences." 
        />
      </div>
    </PageExemplo>
  );
}

export default Dashboard;