import react from 'react';
import './index.css';

const Home = () => {
    return(
            <>
            <div className = 'div_info'align = 'center'>
                <table>
                    <tr>
                        <td>
                            <label>
                                Mathod
                            </label>
                        </td>
                        <td>
                            <label>
                                :
                            </label>
                        </td>
                        <td>
                            <select name = 'Mathod' id = 'Mathod'>
                                <option value = 'first'>first</option>
                                <option value = 'second'>second</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Size
                            </label>
                        </td>
                        <td>
                            <label>
                                :
                            </label>
                        </td>
                        <td>
                            <input type = 'text' name = 'Size' id = 'Size' placeholder = 'In percentage'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Language
                            </label>
                        </td>
                        <td>
                            <label>
                                :
                            </label>
                        </td>
                        <td>
                            <select name = 'Lang' id = 'Lang'>
                                <option value = 'English'>English</option>
                                <option value = 'Hindi'>Hindi</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <table className = 'content' align = 'center'>
                    <tr>
                        <td>
                            <input className = 'input_output' type = 'text' name = 'input' id = 'input'/>
                        </td>
                        <td >
                            <button>
                                Submit
                            </button>
                        </td>
                        <td>
                            <input className = 'input_output' type = 'text' name = 'input' id = 'input'/>
                        </td>
                    </tr>
                </table>
            </div>
            </>

    );
};

export default Home;