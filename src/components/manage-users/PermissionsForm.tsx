import React from "react";
import { FieldArray, useFormikContext } from "formik";
import { Accordion } from "common/accordian/Accordian";
import { Checkbox } from "common/checkbox/Checkbox";
import { PERMISSION_TYPES } from "common/Contants";
import { User, Permission } from "models/ManageUsersModel";

export const PermissionsForm: React.FC = () => {
  const { values } = useFormikContext<User>();

  return (
    <div className="bg-[#F8F8F8] mt-14 rounded-md p-6">
      <div className="text-sm lg:text-base font-semibold text-primary mb-5">
        Permissions
      </div>
      <div className="bg-[#EAF9FF] font-semibold text-sm lg:text-base grid grid-cols-4 pl-5 py-2 rounded-sm">
        <div>Menu Items</div>
        <div className="flex justify-center">Read</div>
        <div className="flex justify-center">Read/Write</div>
        <div className="flex justify-center">Delete</div>
      </div>
      <FieldArray
        name="permissions"
        render={() => (
          <div>
            {values?.permissions?.map((permission: Permission, index) => (
              <Accordion
                key={index}
                disabled={!permission.subPermissions}
                title={
                  <div
                    key={index}
                    className="text-sm lg:text-base grid grid-cols-4 pl-5 py-2 rounded-sm justify-center"
                  >
                    <div>{permission.displayName}</div>
                    {PERMISSION_TYPES.map((type) => (
                      <Checkbox
                        key={`${index}_${type}`}
                        className="flex justify-center"
                        name={`permissions[${index}].${type}`}
                      />
                    ))}
                  </div>
                }
              >
                {permission.subPermissions && (
                  <div className="w-full">
                    {permission.subPermissions.map(
                      (subPermission, subIndex) => (
                        <div
                          key={subIndex}
                          className="text-sm lg:text-base grid grid-cols-4 pl-5 py-2 rounded-sm justify-center"
                        >
                          <div>{subPermission.displayName}</div>
                          {PERMISSION_TYPES.map((type) => (
                            <Checkbox
                              key={`${index}_${subIndex}_${type}`}
                              className="flex justify-center"
                              name={`permissions[${index}].subPermissions[${subIndex}].${type}`}
                            />
                          ))}
                        </div>
                      )
                    )}
                  </div>
                )}
              </Accordion>
            ))}
          </div>
        )}
      />
    </div>
  );
};
