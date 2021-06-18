import api

# Face registration
def face_registration(img_file):
    # load image
    image = api.load_image_file(img_file) 
    # detect face: if number of faces != 1, return error code
    face_locations = api.face_locations(image)

    if face_locations.length != 1:
        return -1

    encoding = api.face_encodings(image)[0]
    return encoding

    # # detect if wear mask or not. If yes, return error code. Else, return face features
    # wear_mask = detect_mask(face_img)
    # if wear_mask:
    #     return -1
    # else:
    #     return face_encode(face_img)


# Face recognization
def face_recognize(img_file, face_features_in_database, cutoff = 0.7):
    # load image
    image = api.load_image_file(img_file) 

    # detect face: if number of faces != 1, return error code
    face_locations = api.face_locations(image)

    if face_locations.length != 1:
        return -1

    encoding = api.face_encodings(image)[0]
    return api.compare_faces([face_features_in_database], encoding, cutoff)

    # detect if wear mask or not. If yes, run mask_face_recog. Else, run ordinary face_recog
    # wear_mask = detect_mask(face_img)
    # if wear_mask:
    #     face_features = face_encode_mask(face_img)
    #     for raw in face_features_in_database:
    #         if(compare(face_features, raw) > cutoff - 0.3):
    #             return raw.num
    #     return 0
    # else:
    #     face_features = face_encode(face_img)
    #     for raw in face_features_in_database:
    #         if(compare(face_features, raw) > cutoff - 0.3):
    #             return raw.num
    #     return 0

