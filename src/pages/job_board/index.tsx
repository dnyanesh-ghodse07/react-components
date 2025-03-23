import { useState, useEffect, useCallback } from "react";

type Job = {
  by: string;
  id: number;
  score: number;
  time: number;
  title: string;
  type: "job";
  url: string;
}

export default function JobBoard() {
  const [jobIds, setJobIds] = useState([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [count, setCount] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://hacker-news.firebaseio.com/v0/jobstories.json",
        );
        const data = await response.json();
        setJobIds(data);
      } catch (err) {
        console.log("Error fetching job ids", err);
      }
    };
    fetchJobs();
  }, []);

  const fetchJobDetails = useCallback(async () => {
    if (count >= jobIds.length || jobIds.length === 0) return;
    try {
      setLoading(true);
      const idsTofetch = jobIds.slice(0, count);
      const jobRequests = idsTofetch.map(async (id) => {
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
        );
        return response.json();
      });

      const jobsData = await Promise.all(jobRequests);
      setJobs(jobsData);
      setLoading(false)
    } catch (err) {
      console.error("Error fetching job details:", err);
    }
  }, [jobIds, count]);

  useEffect(() => {
    fetchJobDetails();
  }, [fetchJobDetails]);

  const date = (dt:number) => new Date(dt * 1000).toLocaleDateString();

  return (
    <div>
      <h1 className='title'>Hacker News Jobs Board</h1>
      <ul className="job-list">
        {jobs.map((job) => {
          return (
            <li key={job.time} className="list-item">
             {job.url ? <a href={job.url} className='list-item-title' target='_block'>{job.title}</a> : <p className='list-item-title'>{job.title}</p>}
              <p className='list-item-footer'>
                By {job.by} {date(job.time).toLocaleString()}
              </p>
            </li>
          );
        })}
        {jobIds.length >= count && (
          <button
            onClick={() => setCount((prev) => prev + 6)}
            className="load-btn"
          >
           {loading ? 'Loading...': 'Load More Jobs' }
          </button>
        )}
      </ul>
    </div>
  );
}