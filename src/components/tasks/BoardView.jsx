import TaskCard from "./TaskCard";

const BoardView = ({ tasks }) => {
  return (
    <div className='w-full py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 2xl:gap-10'>
      {tasks?.filter(t => t.stage === "todo").length > 0 && <div className="flex flex-col gap-y-2">
        {tasks?.filter(t => t.stage === "todo").map((task, index) => (
        <TaskCard task={task} key={index} />
      ))}
      </div>}
      {tasks?.filter(t => t.stage === "in progress").length > 0 && <div className="flex flex-col gap-y-2">
        {tasks?.filter(t => t.stage === "in progress").map((task, index) => (
        <TaskCard task={task} key={index} />
      ))}
      </div>}
      {tasks?.filter(t => t.stage === "completed").length > 0 && <div className="flex flex-col gap-y-2">
        {tasks?.filter(t => t.stage === "completed").map((task, index) => (
        <TaskCard task={task} key={index} />
      ))}
      </div>}
    </div>
  );
};

export default BoardView;
