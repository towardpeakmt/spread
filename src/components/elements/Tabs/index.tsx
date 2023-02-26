export default function Tabs(props:
    {tabsLength:number}) {
    return (
        <div className=''>
            <ul className="flex flex-wrap border-b border-gray-200">
                <li>
                    <a href="#">Profile</a>
                </li>
                <li>
                    <a href="#">Dashboard</a>
                </li>
                <li>
                    <a href="#">Settings</a>
                </li>
                <li>
                    <a href="#">Contacts</a>
                </li>
                <li>
                    <a>Disabled</a>
                </li>
            </ul>
        </div>
    )
  }