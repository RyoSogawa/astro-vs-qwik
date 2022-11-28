import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Button from '~/components/Button'

export default component$(() => {
  return (
    <div>
      <div class={'button-wrapper'}>
        <Button>Hello!</Button>
      </div>
      <div className={'button-wrapper'}>
        <Button>Hello!</Button>
      </div>
      <div className={'button-wrapper'}>
        <Button>Hello!</Button>
      </div>
      <div className={'button-wrapper'}>
        <Button>Hello!</Button>
      </div>
      <div className={'button-wrapper'}>
        <Button>automatic lazy loading</Button>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
}
