import Accordion from "../components/Accordion";
function AccordionPage(){
  const items = [
    {id: "1",
    label:"Lorem ipsum Title",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam velit, mattis vel efficitur id, aliquet eu ligula. Aenean ipsum arcu, rhoncus a mauris non, rutrum volutpat tellus. Etiam facilisis felis pharetra tristique hendrerit. Donec molestie scelerisque blandit. Ut ut bibendum nunc. Nam quis vestibulum urna, sed efficitur nunc. Cras nec velit dapibus, aliquet nulla a, elementum dui. Mauris lobortis mi sed dui fermentum imperdiet. Suspendisse quis ligula eleifend, ornare erat eget, congue diam. Mauris iaculis quam purus, ut dictum lacus eleifend non. Mauris tempor lobortis imperdiet. Nunc consectetur vehicula leo. Maecenas placerat ex eget hendrerit fringilla. Nullam non cursus enim. In hac habitasse platea dictumst."
    }, 
    {id: "2",
    label:"Lorem ipsum Title",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam velit, mattis vel efficitur id, aliquet eu ligula. Aenean ipsum arcu, rhoncus a mauris non, rutrum volutpat tellus. Etiam facilisis felis pharetra tristique hendrerit. Donec molestie scelerisque blandit. Ut ut bibendum nunc. Nam quis vestibulum urna, sed efficitur nunc. Cras nec velit dapibus, aliquet nulla a, elementum dui. Mauris lobortis mi sed dui fermentum imperdiet. Suspendisse quis ligula eleifend, ornare erat eget, congue diam. Mauris iaculis quam purus, ut dictum lacus eleifend non. Mauris tempor lobortis imperdiet. Nunc consectetur vehicula leo. Maecenas placerat ex eget hendrerit fringilla. Nullam non cursus enim. In hac habitasse platea dictumst."
    }, 
    {id: "3",
    label:"Lorem ipsum Title",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam velit, mattis vel efficitur id, aliquet eu ligula. Aenean ipsum arcu, rhoncus a mauris non, rutrum volutpat tellus. Etiam facilisis felis pharetra tristique hendrerit. Donec molestie scelerisque blandit. Ut ut bibendum nunc. Nam quis vestibulum urna, sed efficitur nunc. Cras nec velit dapibus, aliquet nulla a, elementum dui. Mauris lobortis mi sed dui fermentum imperdiet. Suspendisse quis ligula eleifend, ornare erat eget, congue diam. Mauris iaculis quam purus, ut dictum lacus eleifend non. Mauris tempor lobortis imperdiet. Nunc consectetur vehicula leo. Maecenas placerat ex eget hendrerit fringilla. Nullam non cursus enim. In hac habitasse platea dictumst."
    }, 
  ];
    return (
        <div>
     <Accordion items={items}/>
    </div>
    );
}

export default AccordionPage;