import ActionButton from '@atoms/ActionButton'
import { Stack, Tabs } from '@mantine/core'
import Job from '@organisms/Job'
import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const jobData = [
  {
    origin: '65 Dundas St W, Toronto',
    origin_time: '09:40 AM',
    destination: '245 Church St W, Toronto',
    destination_time: '11:56 PM',
    dimensions: '50×30×20cm',
    distance: '8km',
    salary: '$17.32',
    time: '3h 50min',
  },
  {
    origin: '123 Main St, New York',
    origin_time: '08:15 AM',
    destination: '456 Broadway, New York',
    destination_time: '09:45 AM',
    dimensions: '40×25×15cm',
    distance: '5km',
    salary: '$12.50',
    time: '30min',
  },
  {
    origin: '72 Elm St, Los Angeles',
    origin_time: '11:30 AM',
    destination: '789 Sunset Blvd, Los Angeles',
    destination_time: '01:20 PM',
    dimensions: '60×40×25cm',
    distance: '12km',
    salary: '$20.75',
    time: '1h 1min',
  },
  {
    origin: '8 King Road, London',
    origin_time: '10:00 AM',
    destination: '15 Bell Street, London',
    destination_time: '11:15 AM',
    dimensions: '35×30×18cm',
    distance: '4km',
    salary: '$15.20',
    time: '27min',
  },
  {
    origin: '500 Rue de la Montagne, Montreal',
    origin_time: '02:00 PM',
    destination: '750 Rue Sainte-Catherine, Montreal',
    destination_time: '03:30 PM',
    dimensions: '55×35×22cm',
    distance: '7km',
    salary: '$18.90',
    time: '20min',
  },
]

const Jobs = () => {
  const navigate = useNavigate()
  const [tab, setTab] = useState('new')
  const [selected, setSelected] = useState([] as string[])

  const handleSelect = useCallback(
    (job: string) => {
      setSelected((prev: string[]) =>
        !prev.includes(job) ? [...prev, job] : prev.filter((j) => j != job)
      )
    },
    [setSelected]
  )

  const displayJobs = useMemo(() => {
    switch (tab) {
      case 'active':
        return (
          <>
            {selected.map((job) => (
              <Job
                data={jobData.find((j) => j.origin === job)}
                handleSelect={handleSelect}
                active={true}
              />
            ))}
          </>
        )
      case 'new':
      default:
        return (
          <>
            {jobData.map((job) => (
              <Job data={job} handleSelect={handleSelect} />
            ))}
          </>
        )
    }
  }, [tab])

  return (
    <>
      <Tabs value={tab} sx={{ width: '100%' }} color="orange">
        <Tabs.List grow>
          <Tabs.Tab value="new" onClick={() => setTab('new')}>
            New Orders
          </Tabs.Tab>
          <Tabs.Tab value="active" onClick={() => setTab('active')}>
            Active Orders
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Stack
        sx={{
          width: '100%',
          height: '420px',
          padding: '16px',
          backgroundColor: '#E8E9F3',
          overflowY: 'scroll',
        }}
        justify="flex-start"
        align="center"
      >
        {displayJobs}
      </Stack>
      {tab !== 'active' && (
        <ActionButton
          text="Accept Selected Orders"
          handleClick={() => navigate('/map')}
        ></ActionButton>
      )}
    </>
  )
}

export default Jobs
