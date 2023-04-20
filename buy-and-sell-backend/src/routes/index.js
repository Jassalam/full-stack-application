import { getAllListingRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { getAddViewToListingRoute } from "./addViewToListing";
import { getUserListingsRoute } from "./getUserListingsRoute";
import { createNewListingRoute } from "./createNewListing";
import { updateListingRoute } from "./updateListing";
import { deleteListingRoute } from "./deleteListing";

export default [
    getAddViewToListingRoute,
    getAllListingRoute,
    deleteListingRoute,
    updateListingRoute,
    getListingRoute,
    getUserListingsRoute,
    createNewListingRoute
]