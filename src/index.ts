/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

const handleTextPopup = (layerName: string, popupName: string, text: string) => {
    let currentPopup: any = undefined;

    WA.room.onEnterLayer(layerName).subscribe(() => {
        currentPopup = WA.ui.openPopup(popupName, text, []);
    });

    WA.room.onLeaveLayer(layerName).subscribe(() =>{
        if (currentPopup !== undefined) {
            currentPopup.close();
            currentPopup = undefined;
        }
    });
};

handleTextPopup("zones/conferenceRoomPopupNameZone", "conferenceRoomPopupName", "Salle de conference (nom à déterminer)");
handleTextPopup("zones/meetingRoom1PopupNameZone", "meetingRoom1PopupName", "Salle de réunions 1  (nom à déterminer)");
handleTextPopup("zones/meetingRoom2PopupNameZone", "meetingRoom2PopupName", "Salle de réunions 2  (nom à déterminer)");
handleTextPopup("zones/meetingRoom3PopupNameZone", "meetingRoom3PopupName", "Salle de réunions 3  (nom à déterminer)");

WA.player.setOutlineColor(7, 55, 208);