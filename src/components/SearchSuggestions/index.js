import {Link} from 'react-router-dom'

import {AiOutlineRight} from "react-icons/ai"

import './index.css'

const SearchSuggestions = props => (
    const  {statesList} = props

    return(
        <div>
            {statesList.map((eachState) => (
                
                <li>
                <Link to={`/state/${eachState.state_code}`}></Link>
                    <button>
                    
                        <p>{eachState.state_name}</p>

                        <div>
                            {eachState.state_code}
                            <AiOutlineRight />
                        </div>
                    </button>
                    </li>
                </Link>
            ))}
        </div>
    )
)

export default SearchSuggestions