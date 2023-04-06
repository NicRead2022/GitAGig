import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import Client from '../services/api'
import React from 'react'

export const GigCard = ({
  gigId,
  setSelectedGig,
  deletedGig,
  toggleDeletedGig,
  setBandleaderGigs,
  setSelectedMusician
}) => {
  let navigate = useNavigate()
  const [gigDetails, setGigDetails] = useState(null)
  const [musiciansOnGig, setMusiciansOnGig] = useState(null)
  const [deletedMusician, toggleDeletedMusician] = useState(true)

  const getDetails = async () => {
    const response = await Client.get(`/api/gigs/${gigId}`)
    setGigDetails(response.data)
    let data = response.data
    let gigMusicians = []
    data.forEach((element) => {
      gigMusicians.push(element.Musicians)
    })
    if (!gigMusicians[0].id) {
      return null
    } else setMusiciansOnGig(gigMusicians)
    setSelectedMusician(gigMusicians)
  }

  const deleteGig = async () => {
    await Client.delete(`/api/gigs/${gigId}`)
    setBandleaderGigs(null)
    toggleDeletedGig(!deletedGig)
  }

  useEffect(() => {
    getDetails()
  }, [deletedMusician])

  const handleClick = (e) => {
    setSelectedGig(e.target.id)
    navigate('/musicians')
  }

  const handleUpdateClick = (e) => {
    setSelectedGig(gigDetails)
    navigate('/update-gig')
  }

  const handleDeleteMusician = async (e) => {
    let musicianId = e.target.id
    let deletedGig = { gigId: null }
    await axios.put(
      `https://hired-serverside.herokuapp.com/api/musician/${musicianId}`,
      deletedGig
    )
    setMusiciansOnGig(null)
    toggleDeletedMusician(!deletedMusician)
  }

  return (
    <section>
      {gigDetails ? (
        <div className="gig-card">
          <div className="gig-details">
            <h4 className="gig-list-title">{gigDetails[0].venueName}</h4>
            <p className="gig-list-type">
              <b>{gigDetails[0].date}</b> @ {gigDetails[0].time}pm
            </p>
            <p className="gig-list-location">
              <b>located at:</b> {gigDetails[0].location}
            </p>
            <p className="gig-list-type">
              <b>type of gig:</b> {gigDetails[0].gigType}
            </p>
          </div>
          <div className="gig-button-container">
            <button
              className="gigDelete"
              onClick={() => {
                deleteGig(gigId)
              }}
            >
              Delete Gig
            </button>
            <button className="updategig" onClick={handleUpdateClick}>
              Update Gig
            </button>
          </div>
          <ul className="musicians-on-gig">
            <h4>Musicians:</h4>
            {!musiciansOnGig ? (
              <h6>No Musicians On Gig</h6>
            ) : (
              musiciansOnGig.map((musicians, idx) => (
                <section key={musicians.id}>
                  <Link to={`/musician/${idx}`} className="hired-musician">
                    <b>{musicians.name}</b> - {musicians.instrument}
                    <br />
                  </Link>
                  <br />
                  <button
                    className="delete-musician"
                    id={musicians.id}
                    onClick={handleDeleteMusician}
                  >
                    Delete Musician
                  </button>
                </section>
              ))
            )}
          </ul>
          <button
            id={gigId}
            onClick={handleClick}
            className="gigcard-add-musician-btn"
          >
            Add Musicians
          </button>
        </div>
      ) : (
        <h5>No Details Available</h5>
      )}
    </section>
  )
}
