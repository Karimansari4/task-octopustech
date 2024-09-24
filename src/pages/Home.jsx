import React, { useState } from 'react';

function Home() {
    const [data, setData] = useState({ label: 'H', value: 'H' });
    const [tableData, setTableData] = useState([]);
    const [rows, setRows] = useState([[]]);

    const handleOnChange = (evt) => {
        setData({ label: evt.target.value, value: evt.target.value });
    };

    const handleClick = (evt) => {
        evt.preventDefault();
        const newData = [...tableData, data];
        setTableData(newData);


        const lastRow = rows[rows.length - 1];
        if (lastRow.length === 0 || lastRow[lastRow.length - 1].label === data.label) {
            const updatedRows = [...rows];
            updatedRows[updatedRows.length - 1].push(data);
            setRows(updatedRows);
        } else {
            setRows([...rows, [data]]);
        }
    };



    return (
        <div>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <select name="task" id="task" onChange={handleOnChange} value={data.label} style={{ width: '300px' }}>
                    <option value="H">H</option>
                    <option value="T">T</option>
                </select>

                <button onClick={handleClick} style={{ marginTop: '10px' }}>Click</button>
            </div>

            <div style={{ marginTop: '20px' }}>
                <h3>Output:</h3>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {rows.map((row, rowIndex) => (
                        <div key={rowIndex} style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                            {row.map((item, itemIndex) => (
                                <span key={itemIndex} style={{ marginRight: '10px' }}>{item.label}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
