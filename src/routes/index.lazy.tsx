import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='p-4'>
      <h1 className='text-xl font-bold'>دليل المسجد</h1>
    </div>
  )
}
