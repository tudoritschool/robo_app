import "./RobotList.css";

function RobotList({ robots }) {
	return (
		<div className='list_container'>
			{robots.map((robot, index) => {
				return <h3 key={"robot_" + index}>{robot.name}</h3>;
				// return <RobotCard robot={robot}/>
			})}
		</div>
	);
}

export default RobotList;
