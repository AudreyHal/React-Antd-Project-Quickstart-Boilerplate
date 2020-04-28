import axios from "axios";
import mockedAdapter from "axios-mock-adapter";

let mock = new mockedAdapter(axios);
export default mock;
