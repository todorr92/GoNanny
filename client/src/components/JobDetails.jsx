import { useJobsContext } from "../hooks/useJobsContext";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const JobDetails = ({ job }) => {
  const { dispatch } = useJobsContext();

  const handleClick = async () => {
    const response = await fetch("/api/jobs-board/" + job._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_JOB", payload: json });
    }
  };

  return (
    <div>
      <h4>{job.title}</h4>
      <p>
        <strong>Description: </strong>
        {job.description}
      </p>
      <p>
        <strong>Address:</strong>
        {job.address}
      </p>
      <p>
        <strong>Posted by:</strong>
        {job.postedBy}
      </p>
      <p>{formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default JobDetails;
