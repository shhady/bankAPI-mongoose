import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function User() {
  const [allUsers, setAllUsers] = useState(null);
  const [showDepositInput, setShowDepositInput] = useState(false);
  const [showWithdrawInput, setShowWithdrawInput] = useState(false);
  const [showTransferInput, setshowTransferInput] = useState(false);
  const [updatedCash, setUpdatedCash] = useState(null);
  useEffect(() => {
    const search = async () => {
      const response = await axios.get("http://localhost:8000/users");
      setAllUsers(response.data);
    };
    search();
  }, []);
  console.log(allUsers);

  //   useEffect(() => {
  //     const search = async () => {
  //       const response = await axios.delete("http://localhost:8000/users");
  //       setAllUsers(response.data);
  //     };
  //     search();
  //   }, []);
  //   console.log(allUsers);

  if (!allUsers) return null;

  const handleClickDeposit = () => {
    setShowDepositInput(!showDepositInput);
  };

  const handleSubmitDeposit = (id) => {
    setShowDepositInput(!showDepositInput);
    axios.put(`http://localhost:8000/update/${id}`, {
      id: id,
      updatedCash: updatedCash,
    });
    console.log(updatedCash);
  };
  const handleClickWithdraw = () => {
    setShowWithdrawInput(!showWithdrawInput);
  };
  const handleClickTransfer = () => {
    setshowTransferInput(!showTransferInput);
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:8000/delete/${id}`);
  };
  const insertData = () => {
    return allUsers.map((user) => {
      return (
        <div
          key={user.passportID}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(9, 1fr)",
            marginTop: "1rem",
            border: "1px solid black",
            padding: ".5rem",
          }}
        >
          <div>{user.lastName}</div>
          <div>{user.firstName}</div>
          <div>{user.passportID}</div>
          <div>{user.cash}</div>
          <div>{user.credit}</div>

          <div>
            <button onClick={handleClickDeposit}>Deposit</button>
            <div>
              {showDepositInput && (
                <>
                  <input
                    type="number"
                    placeholder="amount"
                    onChange={(e) => {
                      setUpdatedCash(e.target.value);
                    }}
                  ></input>
                  <button onClick={() => handleSubmitDeposit(user._id)}>
                    Submit
                  </button>
                </>
              )}
            </div>
          </div>
          <div>
            <button onClick={handleClickWithdraw}>Withdraw</button>
            <div>
              {showWithdrawInput && (
                <input type="number" placeholder="amount"></input>
              )}
            </div>
          </div>
          <div>
            <button onClick={handleClickTransfer}>Transfer</button>
            <div>
              {showTransferInput && (
                <>
                  <input type="number" placeholder="amount"></input>
                  <input type="number" placeholder="Transfer to"></input>
                </>
              )}
            </div>
          </div>
          <div>
            <button onClick={() => deleteUser(user._id)}>delete</button>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(9, 1fr)",
        }}
      >
        <div>
          <h2>Family</h2>
        </div>
        <div>
          <h2>Name</h2>
        </div>
        <div>
          <h2>passport</h2>
        </div>
        <div>
          <h2>cash</h2>
        </div>
        <div>
          <h2>credit</h2>
        </div>
        <div>
          <h2>deposit</h2>
        </div>
        <div>
          <h2>Withdraw</h2>
        </div>
        <div>
          <h2>Transfer</h2>
        </div>
      </div>
      <div> {insertData()}</div>
    </div>
  );
}
