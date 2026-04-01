import Infobox from "./infobox"

const infoboxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Infobox
              heading="For Renters"
              backgroundColor="bg-gray-100"
              textColor="text-gray-800"
              buttonInfo={{
                link: "/properties",
                text: "Browse Properties",
                backgroundColor: "bg-black"
              }}
            >
              Find your dream rental property. Bookmark properties and contact owners.
            </Infobox>
            <Infobox
              heading="For Property Owners"
              backgroundColor="bg-gray-800"
              textColor="text-gray-300"
              buttonInfo={{
                link: "/add-property",
                text: "Add Property",
                backgroundColor: "bg-blue-500"
              }}
            >
              List your properties and reach potential tenants. Rent as an airbnb or long term.
            </Infobox>

        </div>
      </div>
    </section>
  )
}

export default infoboxes