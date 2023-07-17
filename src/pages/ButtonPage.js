import { GoBell } from "react-icons/go";
import Button from "../components/Button";
function ButtonPage(){
    return (
        <div>
        <div>
      <div>
        <Button primary>
          Button
        </Button>
      </div>
      <div>
        <Button secondary>
        Button
        </Button>
      </div>
      <div>
        <Button success outline>
        Button
        </Button>
      </div>
      <div>
        <Button warning rounded>
        Button
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
        Button
        </Button>
      </div>
    </div>
      
    </div>
    );
}

export default ButtonPage;