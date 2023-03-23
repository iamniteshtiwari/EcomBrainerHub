import React from 'react'
import Header from '../components/common/Header'
import Products from './Products';
import { useLocation } from 'react-router-dom';






function Dashboard(cart) {
    const product=[

        {
            id: 1,
            name: 'Bike',
            price: 10000,
            image: require('../Assets/img/Bike1.jpg')
          },
          {
            id: 2,
            name: 'Bike 2',
            price: 20000,
            image: require('../Assets/img/Bike2.jpg')
          },
          {
            id: 3,
            name: 'Bike 3',
            price: 10000,
            image: require('../Assets/img/Bike3.jpg')
          },
          {
            id: 4,
            name: 'Bike 4',
            price: 20000,
            image: require('../Assets/img/Bike4.jpg')
          },
          {
            id: 5,
            name: 'Bike 5',
            price: 10000,
            image: require('../Assets/img/Bike5.jpg')
          },
          {
            id: 6,
            name: 'Bike 6',
            price: 20000,
            image: require('../Assets/img/Bike6.jpg')
          },
          {
            id: 7,
            name: 'Bike 7',
            price: 20000,
            image: require('../Assets/img/bike7.jpg')
          },
          {
            id: 8,
            name: 'Bike 8',
            price: 20000,
            image: require('../Assets/img/Bike8.jpg')
          },
          
        ];
        const location = useLocation();
        console.log(location.state);


    
  return (
    <div>
        <Header cartLength={cart.length}/>
        
        <Products product={product} />
        
        Your are now onDashboard</div>
  )
}

export default Dashboard