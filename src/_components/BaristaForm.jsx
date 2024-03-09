import React from 'react'; 
import { useState } from 'react';
import RecipieChoices from './RecipieChoices';
import drinksJSON from '../../public/drinks.json';
export default function BaristaForm() {

    const [inputs, setInputs] = useState({
        'temperature': '', 
        'milk': '',
        'syrup': '',
        'blended': '', 
    });

    const [currentDrink, setCurrentDrink] = useState(drinksJSON[Math.floor(Math.random() * drinksJSON.drinks.length)]);

    const [correctDrink, setCorrectDrink] = useState({});

    const [correct_temp, setCheckTemp] = useState('');
    const [correct_milk, setCheckMilk] = useState('');
    const [correct_syrup, setCheckSyrup] = useState('');
    const [correct_blended, setCheckBlended] = useState('');   

    const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    };

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJSON.drinks.length);

        setCurrentDrink(drinksJSON.drinks[randomDrinkIndex].name);
        setCorrectDrink(drinksJSON.drinks[randomDrinkIndex].ingredients);
    };

    const onCheckAnswer = () => {
        if (inputs['temperature'] === correctDrink.temperature) {
            setCheckTemp('correct');
        }
        else {
            setCheckTemp('incorrect');
        }

        if (inputs['milk'] === correctDrink.milk) {
            setCheckMilk('correct');
        }
        else {
            setCheckMilk('incorrect');
        }

        if (inputs['syrup'] === correctDrink.syrup) {
            setCheckSyrup('correct');
        }
        else {
            setCheckSyrup('incorrect');
        }

        if (inputs['blended'] === correctDrink.blended) {
            setCheckBlended('correct');
        }
        else {
            setCheckBlended('incorrect');
        }
    };

    const onNewDrink = () => {

        setInputs({
            'temperature': '', 
            'milk': '',
            'syrup': '',
            'blended': '', 
        });

        setCheckTemp('');
        setCheckMilk('');
        setCheckSyrup('');
        setCheckBlended('');
        

        getNextDrink();
    };

    return (
        <>
            <div>
                <h2>Hi, I'd like to order a:</h2>
                <div className='drink-container'>
                    <h2 className='mini-header'>
                        {currentDrink}
                    </h2>
                    <button type='new-drink-button' className='button newdrink' onClick={onNewDrink}>
                        🔄
                    </button>
                </div>
                <h3>Temperature</h3>
                <div className='answer-space' id={correct_temp}>
                    {inputs["temperature"]}
                </div>
                <RecipieChoices 
                    handleChange={(e) => setInputs({...prevState, [e.target.name]: e.target.value})}
                    label='temperature'
                    choices={ingredients['temperature']}
                    checked={inputs['temperature']}
                />
                <h3>Milk</h3>
                <div className='answer-space' id={correct_milk}>
                    {inputs["milk"]}
                </div>
                <RecipieChoices 
                    handleChange={(e) => setInputs({...prevState, [e.target.name]: e.target.value})}
                    label='milk'
                    choices={ingredients['milk']}
                    checked={inputs['milk']}
                />
                <h3>Syrup</h3>
                <div className='answer-space' id={correct_syrup}>
                    {inputs["syrup"]}
                </div>
                <RecipieChoices 
                    handleChange={(e) => setInputs({...prevState, [e.target.name]: e.target.value})}
                    label='syrup'
                    choices={ingredients['syrup']}
                    checked={inputs['syrup']}
                />
                <h3>Blended</h3>
                <div className='answer-space' id={correct_blended}>
                    {inputs["blended"]}
                </div>
                <RecipieChoices 
                    handleChange={(e) => setInputs({...prevState, [e.target.name]: e.target.value})}
                    label='blended'
                    choices={ingredients['blended']}
                    checked={inputs['blended']}
                />
                <form className='container'>
                </form>
                <button type='submit' className='button submit' onClick={onCheckAnswer}>
                    Check Answer
                </button>
                <button type="new-drink-button" className="button newdrink" onClick={onNewDrink}>
                    New Drink
                </button>
            </div>
        </>
    );
};