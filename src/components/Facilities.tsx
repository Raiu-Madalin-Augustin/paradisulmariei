import React from 'react';
import './Facilities.css';
import { FaFortAwesome, FaMountain, FaCampground, FaCar } from 'react-icons/fa';

const Facilities: React.FC = () => {
    return (
        <section id="facilities" className="facilities-section">
            <h2>Playground Facilities</h2>
            <ul>
                <li><FaFortAwesome /> Inflatable Castle</li>
                <li><FaMountain /> Zipline</li>
                <li><FaCampground /> Event Tent</li>
                <li><FaCar /> ATVs for kids</li>
            </ul>
        </section>
    );
};

export default Facilities;