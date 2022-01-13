/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

const handleTextPopup = (zoneName: string, popupName: string, text: string) => {
    let currentPopup: any = undefined;

    WA.room.onEnterZone(zoneName, () => {
        currentPopup = WA.ui.openPopup(popupName, text, []);
    })

    WA.room.onLeaveZone(zoneName, closePopUp)

    function closePopUp(){
        if (currentPopup !== undefined) {
            currentPopup.close();
            currentPopup = undefined;
        }
    }
};

handleTextPopup("conferenceRoomPopupNameZone", "conferenceRoomPopupName", "Salle de conference (nom à déterminer)");
handleTextPopup("meetingRoom1PopupNameZone", "meetingRoom1PopupName", "Salle de réunions 1  (nom à déterminer)");
handleTextPopup("meetingRoom2PopupNameZone", "meetingRoom2PopupName", "Salle de réunions 2  (nom à déterminer)");
handleTextPopup("meetingRoom3PopupNameZone", "meetingRoom3PopupName", "Salle de réunions 3  (nom à déterminer)");
