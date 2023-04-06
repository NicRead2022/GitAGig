import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Client from '../services/api'
import React from 'react'
import { GigCard } from './GigCard'

const BandleaderHome = ({
  selectedGig,
  setSelectedGig,
  selectedMusician,
  setSelectedMusician
}) => {
  const [bandleaderDetails, setBandleaderDetails] = useState()
  const [bandleaderGigs, setBandleaderGigs] = useState([])
  const [deletedGig, toggleDeletedGig] = useState(false)

  let { id } = useParams()

  const getDetails = async () => {
    const response = await Client.get(
      `https://hired-serverside.herokuapp.com/api/bandleader/${id}`
    )
    setBandleaderDetails(response.data[0])
    let data = response.data
    let bandGigs = []
    data.forEach((element) => {
      bandGigs.push(element.Gigs)
    })
    if (!bandGigs[0].id) {
      return null
    } else setBandleaderGigs(bandGigs)
  }

  useEffect(() => {
    getDetails()
  }, [deletedGig])

  return (
    <div>
      <div className="bandleader-land">
        <div className="bandleader-info">
          <h2 className="welcome">Welcome {bandleaderDetails?.name}!</h2>
          <img
            className="profile-pic"
            alt="profile-pic"
            src={bandleaderDetails?.blImage}
          ></img>
          <h3>Band Name: {bandleaderDetails?.band}</h3>
          <h4>
            Social Media:{' '}
            <a
              href={`https://${bandleaderDetails?.socialMedia}`}
              rel="noreferrer"
              target="_blank"
            >
              {bandleaderDetails?.socialMedia}
            </a>
          </h4>
        </div>
        <div className="gig-list">
          <Link to="/new-gig">
            <button className="add-gigbtn">Add Gig</button>
          </Link>
        </div>
        <div className="gigs-div">
          <h2 className="gig-list-header">Your Upcoming Gigs</h2>
          {!bandleaderGigs ? (
            <h5>No Upcoming Gigs</h5>
          ) : (
            bandleaderGigs.map((gig, index) => (
              <div key={gig.id} className="gig-card-wrapper">
                <GigCard
                  key={gig.id}
                  gigId={gig.id}
                  selectedMusician={selectedMusician}
                  setSelectedMusician={setSelectedMusician}
                  selectedGig={selectedGig}
                  setSelectedGig={setSelectedGig}
                  deletedGig={deletedGig}
                  toggleDeletedGig={toggleDeletedGig}
                  setBandleaderGigs={setBandleaderGigs}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default BandleaderHome
