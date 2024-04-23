import React from 'react';

const Rankings = ({ candidates }) => { // Corrected destructuring here
  // Actual earnings and revenue for each company
  const actualEarnings = {
    Tesla: 10000,
    Microsoft: 10000,
    Google: 10000
  };

  const actualRevenue = {
    Tesla: 10000,
    Microsoft: 10000,
    Google: 10000
  };

  // Function to compare predictions with actual earnings and revenue and give rankings
  const getRankings = () => {
    const rankings = candidates.map(candidate => {
      const { companyID, earningsEstimate, revenueEstimate } = candidate;
      const earningsDiff = Math.abs(earningsEstimate - actualEarnings[companyID]);
      const revenueDiff = Math.abs(revenueEstimate - actualRevenue[companyID]);

      return {
        ...candidate,
        earningsDiff,
        revenueDiff
      };
    });

    // Sorting candidates by earnings and revenue difference
    rankings.sort((a, b) => {
      const aTotalDiff = a.earningsDiff + a.revenueDiff;
      const bTotalDiff = b.earningsDiff + b.revenueDiff;
      return aTotalDiff - bTotalDiff;
    });

    return rankings;
  };

  // Call the getRankings function to get the rankings
  const rankings = getRankings();

  return (
    <div className="candidates-table">
      <h2>Rankings</h2>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>User</th>
            <th>Company</th>
            <th>ReportingPeriod</th>
            <th>EarningsEstimate</th>
            <th>RevenueEstimate</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((candidate, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{candidate.user}</td>
              <td>{candidate.companyID}</td>
              <td>{candidate.reportingPeriod}</td>
              <td>{candidate.earningsEstimate}</td>
              <td>{candidate.revenueEstimate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Rankings;



