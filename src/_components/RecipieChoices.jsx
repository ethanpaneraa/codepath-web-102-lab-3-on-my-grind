import React from 'react'; 
import { Component, useState, useEffect } from 'react';
export default function RecipieChoices({ handleChange, label, choices, checked }) {

    return (
        <>
            <div className='radio-buttons'>
                {choices && choices.map((choice, index) => (
                    <li key={index}>
                        <input
                            id={choice}
                            value={choice}
                            name={label}
                            type='radio'
                            onChange={handleChange}
                            checked={checked === choice}
                        />
                        {choice}
                    </li>
                ))}
            </div>
        </>
    );
};