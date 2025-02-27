const ResponderCapabilityStatementPage = {
  name: "Responder CapabilityStatement",
  columns: [
    {
      capability: "fhir version",
      testIds: [
        "au_core_v100-au_core_v100_fhir_api-au_core_v030_ballot_capability_statement-au_core_fhir_version",
      ],
    },
    {
      capability: "format - json",
      testIds: [
        "au_core_v100-au_core_v100_fhir_api-au_core_v030_ballot_capability_statement-au_core_json_support",
      ],
    },
    {
      capability: "format - application/json-patch+json",
      testIds: [],
    },
    // more?
  ],
};

const AllergyIntolerancePage = {
  name: "AllergyIntolerance",
  columns: [
    {
      capability: "Profile Conformance",
      testIds: [
        "au_core_v100-au_core_v100_fhir_api-au_core_v100_allergy_intolerance-au_core_v100_allergy_intolerance_validation_test",
      ],
    },
    {
      capability: "Resolves References",
      testIds: [],
    },
    {
      capability: "Interaction - read",
      testIds: [
        "au_core_v100-au_core_v100_fhir_api-au_core_v100_allergy_intolerance-au_core_v100_allergy_intolerance_read_test",
      ],
    },
    {
      capability: "Search parameter - patient",
      testIds: [
        "au_core_v100-au_core_v100_fhir_api-au_core_v100_allergy_intolerance-au_core_v100_allergy_intolerance_patient_search_test",
      ],
    },
    {
      capability: "Search parameter - patient.identifier",
      testIds: [
        "au_core_v100-au_core_v100_fhir_api-au_core_v100_allergy_intolerance-au_core_v100_allergy_intolerance_patient_chain_search_test",
        "au_core_v100-au_core_v100_fhir_api-au_core_v100_allergy_intolerance-au_core_v100_allergy_intolerance_patient_ihi_chain_search_test",
        "au_core_v100-au_core_v100_fhir_api-au_core_v100_allergy_intolerance-au_core_v100_allergy_intolerance_patient_medicare_chain_search_test",
        "au_core_v100-au_core_v100_fhir_api-au_core_v100_allergy_intolerance-au_core_v100_allergy_intolerance_patient_dva_chain_search_test",
      ],
    },
    {
      capability: "Search parameter - patient+clinical-status",
      testIds: [
        "au_core_v100-au_core_v100_fhir_api-au_core_v100_allergy_intolerance-au_core_v100_allergy_intolerance_patient_clinical_status_search_test",
      ],
    },
  ],
};

const CoverageReportMapping = [
  ResponderCapabilityStatementPage,
  AllergyIntolerancePage,
  // more!
];

export default CoverageReportMapping;
