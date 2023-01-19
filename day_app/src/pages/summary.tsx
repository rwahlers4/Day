import SummaryProps from '../type_defs'

export function Summary(props:SummaryProps) {
    let scores = props.scores;
    return (
        <ul>
            {scores.map((num:number, index:number) => <li key={index}>{num}</li>)}
        </ul>

    );
}