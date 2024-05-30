import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';

function HomePage() {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Products</h1>
      {user && (
        <button>
          상품 등록
        </button>
      )}
    </div>
  );
}

export default HomePage;