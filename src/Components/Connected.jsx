import React from 'react';

const Connected = (props) => {
  const handleGetRankings = () => {
    props.onGetRankings(); // Call the function passed from the parent component
  };

  return (
    <div className="connected-container">
      <h1 className="connected-header">You are Connected to Metamask</h1>
      <p className="connected-account">Metamask Account: {props.account}</p>
      {props.showButton ? (
        <p className="connected-account">You have already voted</p>
      ) : (
        <div>
          <select
            value={props.companyid}
            onChange={props.handleCompanyidChange}
            className="company-select"
          >
            <option value="">Select a company</option>
            <option value="Tesla">Tesla</option>
            <option value="Google">Google</option>
            <option value="Microsoft">Microsoft</option>
          </select>
          <input
            type="text"
            placeholder="Enter Period"
            value={props.period}
            onChange={props.handlePeriodChange}
          ></input>
          <input
            type="number"
            placeholder="Enter company predicted earnings"
            value={props.earnings}
            onChange={props.handleEarningsChange}
          ></input>
          <input
            type="number"
            placeholder="Enter company predicted revenue"
            value={props.revenue}
            onChange={props.handleRevenueChange}
          ></input>
          <br />
          <button className="login-button" onClick={props.estimateFunction}>
            Estimate
          </button>
          <button className="get-rankings-button" onClick={props.handleGetRankings}>
            Get Rankings
          </button>
        </div>
      )}

      <table id="myTable" className="candidates-table">
        <thead>
          <tr>
            <th>User</th>
            <th>CompanyID</th>
            <th>ReportingPeriod</th>
            <th>CompanyEarnings</th>
            <th>CompanyRevenue</th>
          </tr>
        </thead>
        <tbody>
          {props.candidates.map((candidate, index) => (
            <tr key={index}>
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
};

export default Connected;


