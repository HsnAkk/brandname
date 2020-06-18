import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions/dataActions';
import CardComponent from '../components/CardComponent';
import { CardGroup } from 'react-bootstrap';
import CheckBox from '../components/CheckBox';

function LandingPage() {

    const [ filteredCategories, setFilteredCategories ] = useState([])

    // cards from redux
    const cardData  = useSelector(state => state.cards);
    const { loading, cards, error } = cardData;
    
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchData())
    }, [dispatch ])

    // to get unique tag's name of cards
    const filterCheckBoxes = [...new Set(cards.map(item => item.tag))]

    // checkbox onChange event handler,  ( NOTE : at the begining all checkboxes are checked )
    const changeHandle = e => {
        if (!e.target.checked) {
            if (!filteredCategories.includes(e.target.value)) {
                setFilteredCategories([...filteredCategories, e.target.value])
            }
        } else {
            if (filteredCategories.includes(e.target.value)) {
                setFilteredCategories(filteredCategories.filter( item => item !== e.target.value ))
            }
        }
    }
  
    return (
        <div>
            {
                loading ? <div>Loading.....</div> : error ? <div>{error}</div> : 
                <div>
                    <div className="filter-outbox">
                        <div>Filter :</div>
                        <div className="filter-innerbox">
                            {
                                filterCheckBoxes.map( (item, index) =><CheckBox key={index} id={index} value={item} changeHandle={changeHandle} />)
                            }
                        </div>
                    </div>
                    <CardGroup>
                        {
                            cards.filter(item => !filteredCategories.includes(item.tag)).length >0 ? 
                                cards.filter(item => !filteredCategories.includes(item.tag)).map( item => <CardComponent key={item.id} {...item} />)
                                :
                                <div className="no-foods">No foods more ...! </div>
                        }
                    </CardGroup>
                </div>
            }
        </div>
    )
}

export default LandingPage
