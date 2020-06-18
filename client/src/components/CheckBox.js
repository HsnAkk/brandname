import React from 'react'

const CheckBox = ({id, changeHandle, value }) => {
    
    return (
        <div className= {value === 'Fruit' ? 'checkbox-outbox bg-warning' : value === 'Meat' ? 'checkbox-outbox bg-danger' : value === 'Vegetable' ? 'checkbox-outbox bg-success' : 'checkbox-outbox bg-primary'}>
            <input  id={id}
                    onChange={changeHandle} 
                    type="checkbox" 
                    value={value} 
                    defaultChecked={true}
                    />
            <label htmlFor={id}>{value}</label>
        </div>
    )
}

export default CheckBox