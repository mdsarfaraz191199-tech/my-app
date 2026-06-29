import './App.css'

const rows = [
  ["NRI", "Address Update", "Address", "No Access", "XXXX XXXX XXXX...XXXX"],
  ["NRI", "Address Update", "Aadhaar Number", "No Access", "XXXX XXXX XXXX"],
  ["NRI", "Address Update", "Account Number", "No Access", "XXXX XXXX XXXX XXXX"],
  ["NRI", "Address Update", "Related Party", "No Access", "XXXXXXXXXX"],
  ["Corporate", "Stop Check", "Name", "No Access", "XXXX XXXXX XXXXX"],
  ["Corporate", "Stop Check", "DOB", "No Access", "XX-XX-XXXX"],
  ["Corporate", "Stop Check", "Aadhaar Number", "No Access", "XXXX XXXX XXXX"],
  ["Corporate", "Stop Check", "Phone Number", "No Access", "XX XXXXX XXXXX"],
]

function App() {

  return (
    <div className='app'>
      <header className='topbar'>
        <div className='logo'>Logo</div>
        <div className='top-search'>
          <select><option>Category</option></select>
          <input placeholder='Search' />
          <span className='ico'>🔍</span>
        </div>
        <div className='top-right'><span className='ico'>🔔</span><span className='ico'>👤</span></div>
      </header>

      <div className='body'>
        <nav className='sidebar'>
          <span>:O</span><span>📅</span><span>📦</span><span>+</span><span>🕝</span><span>🔍</span>
        </nav>

        <main className='main'>
          <div className='breadcrumb'>Home - Admin - Access Control</div>
          <h2 className='title'>Maintain Role Level Access Control</h2>

          <div className='panel'>
            <div className='panel-label'>Search Criteria</div>
            <div className='grid'>
              <div className='field'>
                <label>Role *</label>
                <div className='input-icon'>
                  <input defaultValue="Branch Manager" />
                  <span className='ico'>🔍</span>
                </div>
              </div>
              <div className='field'>
                <label>Access Control Type *</label>
                <select><option>Field Level</option></select>
              </div>
              <div className='field'>
                <label>Case Category</label>
                <div className='chips'>
                  <span className='chip'>NRO <b>x</b></span>
                  <span className='chip'>Corporate <b>x</b></span>
                </div>
              </div>
              <div className='field'>
                <label>Case Sub-Category</label>
                <div className='chips'>
                  <span className='chip'>Address Update <b>x</b></span>
                  <span className='chip'>Stop Check <b>x</b></span>
                </div>
              </div>
            </div>
            <div className='actions'>
              <button className='link'>Clear</button>
              <button className='primary'>Search</button>
            </div>
          </div>
          <div className='panel'>
            <div className='panel-head'>
              <span className='panel-label'>Access Controls</span>
              <span className='ico'>▽</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Case Category</th><th>Case Sub-Category</th><th>Field Name</th>
                  <th>Access Type</th><th>Masking Preview</th><th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i}>
                    <td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td>{r[4]}</td>
                    <td className='row-actions'><span className='ico'>👁️</span><span className='ico'>✏️</span></td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </main>
      </div>

    </div>
  );
}

export default App;
