import { useState } from "react"

export default function TableSelection () {

    const [table, setTable] = useState();
    const onChange = e => setTable(e.target.value);

    return (
        <section id="booking-table">
            <h4>Where You would like to sit?</h4>
            <div>
                <input type="radio" id="1" name="tables" value="1" onChange={onChange} />
                <label htmlFor="1" className="tbl-small">1</label>
                <input type="radio" id="2" name="tables" value="2" onChange={onChange} disabled={true} />
                <label htmlFor="2" className="tbl-big">2</label>
                <input type="radio" id="3" name="tables" value="3" onChange={onChange} />
                <label htmlFor="3" className="tbl-small">3</label>
            </div>
            <div>
                <input type="radio" id="4" name="tables" value="4" onChange={onChange} />
                <label htmlFor="4" className="tbl-med">4</label>
                <input type="radio" id="5" name="tables" value="5" onChange={onChange} />
                <label htmlFor="5" className="tbl-small">5</label>
                <input type="radio" id="6" name="tables" value="6" onChange={onChange} />
                <label htmlFor="6" className="tbl-med">6</label>
            </div>
            <div>
                <input type="radio" id="7" name="tables" value="7" onChange={onChange} disabled={true} />
                <label htmlFor="7" className="tbl-small">7</label>
                <input type="radio" id="8" name="tables" value="8" onChange={onChange} />
                <label htmlFor="8" className="tbl-big">8</label>
                <input type="radio" id="9" name="tables" value="9" onChange={onChange} disabled={true} />
                <label htmlFor="9" className="tbl-small">9</label>
            </div>
        </section>
    )
}