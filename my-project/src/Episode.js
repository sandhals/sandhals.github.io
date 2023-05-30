import React from 'react'

export default function Episode(props){
    return(
    <li id={`episode-${props.no}`} class="episode-item">
				<input type="checkbox" className="episode-checkbox" id={`checkbox-${props.no}`} />
				<label for={`checkbox-${props.no}`}> {props.no}. {props.title}</label>
                <span class="score">0</span>
                <span class="total">0</span>
			</li>
            )
}