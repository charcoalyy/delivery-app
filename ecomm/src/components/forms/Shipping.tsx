import {
  Button,
  Grid,
  SegmentedControl,
  Select,
  TextInput,
  Title,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import CenterContainer from 'src/components/wrappers/CenterContainer'
import { useEffect, useMemo } from 'react'
import { formConfig, initialValues, validate } from './constants'
import useRequest from '@hooks/useRequest'
import { createShipJob, shippingInquiry } from '@api/shipping'

const Shipping = ({
  setSubmitted,
}: {
  setSubmitted: (params: any) => void
}) => {
  const form = useForm({
    initialValues: initialValues,
    validate: validate,
  })

  const { data: trackingId, makeRequest: postShippingJob } = useRequest({
    request: createShipJob,
    requestByDefault: false,
  })

  const { data: routeData, makeRequest: requestRouteData } = useRequest({
    request: shippingInquiry,
    requestByDefault: false,
  })

  const formElements = useMemo(
    () =>
      formConfig.map((config) => {
        switch (config.type) {
          case 'select':
            return (
              <Grid.Col span={config.col} key={config.formProps}>
                <Select
                  withinPortal
                  data={config.options || []}
                  placeholder={config.placeholder}
                  label={config.label}
                  {...form.getInputProps('country')}
                />
              </Grid.Col>
            )
          case 'text':
          default:
            return (
              <Grid.Col span={config.col} key={config.formProps}>
                <TextInput
                  label={config.label}
                  placeholder={config.placeholder}
                  {...form.getInputProps(config.formProps)}
                />
              </Grid.Col>
            )
        }
      }),
    [form]
  )

  useEffect(() => {
    if (trackingId && routeData) {
      setSubmitted({
        trackingId: trackingId,
        fee: routeData.fee,
      })
    }
  }, [trackingId, routeData])

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        postShippingJob({
          origin: '65 Dundas St W, Toronto, ON M5G 2C3',
          destination: `${values.address}, ${values.city}, ${values.province} ${values.postal_code}`,
        })
        requestRouteData({
          origin: '65 Dundas St W, Toronto, ON M5G 2C3',
          destination: `${values.address}, ${values.city}, ${values.province} ${values.postal_code}`,
        })
      })}
    >
      <button
        onClick={() => {
          postShippingJob({
            origin: '65 Dundas St W, Toronto, ON M5G 2C3',
            destination: '245 Church St, Toronto, ON M5B 1Z4',
          })
          requestRouteData({
            origin: '65 Dundas St W, Toronto, ON M5G 2C3',
            destination: '245 Church St, Toronto, ON M5B 1Z4',
          })
        }}
      >
        click me
      </button>
      <CenterContainer>
        <Grid.Col span={12}>
          <SegmentedControl
            fullWidth
            data={[
              { value: 'order', label: 'Order Details', disabled: true },
              { value: 'payment', label: 'Payment', disabled: true },
              { value: 'shipping', label: 'Shipping' },
            ]}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Title order={6} tt="uppercase">
            Shipping Address
          </Title>
        </Grid.Col>
        {formElements}
        <Grid.Col
          span={12}
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Button color="violet" type="submit">
            Submit
          </Button>
        </Grid.Col>
      </CenterContainer>
    </form>
  )
}

export default Shipping
