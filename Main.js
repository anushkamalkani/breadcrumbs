import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb'
import './style.css';

const items = [
    { to: '/', label: 'Home' },
    { to: '/jobs', label: 'Jobs' },
    { to: '/company1', label: 'CompanyA' },
    { to: '/forms', label: 'Forms' },
    { to: '/candidates', label: 'Candidates' },
  ]

  const Separator = ({ children, ...props }) => (
    <span style={{ color: 'teal' }} {...props}>
      {children}
    </span>
  )

export default () => (
  <div>
     <Breadcrumb separator={<Separator>/</Separator>}>
      {items.map(({ to, label }) => (
        <Link key={to} to={to}>
          {label}
        </Link>
      ))}
    </Breadcrumb>
  </div>
)

