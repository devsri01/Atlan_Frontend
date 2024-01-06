import React, { useState } from 'react';
import './MergeTable.css';
import Table1 from './firsttable/Table1';
import Table2 from './sectable/Table2';
import Table3 from './thirdtable/Table3';
import Table4 from './fourthtable/Table4';

const MergeTable = () => {
    const [value, setValue] = useState('');
    const [btn, setBtn] = useState(false);

    const handleChange = (e) => {
        setBtn(false);
        setValue(e.target.value);
    }

    return (
        <div className="mergeTableContainer">
            <select className="tableSelect" value={value} onChange={handleChange}>
                <option value="">Select a Table</option>
                <option value="Table 1">Table 1</option>
                <option value="Table 2">Table 2</option>
                <option value="Table 3">Table 3</option>
                <option value="Table 4">Table 4</option>
            </select>
            <button className="exportButton" onClick={() => setBtn(true)}>
                Execute Query for {value}
            </button>
            {btn === true ? (value === 'Table 1' ? <Table1 /> : value === 'Table 2' ? <Table2 /> : value === 'Table 3' ? <Table3 /> : value === 'Table 4' ? <Table4 /> : null) : null}
        </div>
    );
}

export default MergeTable;
