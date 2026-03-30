
import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Property Pulse',
  description: 'Your go-to platform for real estate insights and listings.',
  keywords: 'real estate, property listings, market insights, home buying, home selling, property management',  
}

const MainLayout = ({ children }) => {
  return (
    <html>
        <body>
           <div>{children}</div> 
        </body>
        
    </html>
    
  )
}

export default MainLayout;