import AutosummitProjectPage from "./AutosummitProjectPage";
import EndolapProjectPage from "./EndolapProjectPage";
import GlobalAccessoriesProjectPage from "./GlobalAccessoriesProjectPage";
import HugeForestProjectPage from "./HugeForestProjectPage";
import KpitanProjectPage from "./KpitanProjectPage";
import MbeEcosystemProjectPage from "./MbeEcosystemProjectPage";
import PlanappProjectPage from "./PlanappProjectPage";
import ReplavinosProjectPage from "./ReplavinosProjectPage";
import RutaPymeProjectPage from "./RutaPymeProjectPage";
import StandardProjectDetailPage from "./StandardProjectDetailPage";
import WoodChipsProjectPage from "./WoodChipsProjectPage";

const PROJECT_DETAIL_REGISTRY = {
  "mbe-ecosystem": MbeEcosystemProjectPage,
  "global-accessories": GlobalAccessoriesProjectPage,
  kpitan: KpitanProjectPage,
  "wood-chips": WoodChipsProjectPage,
  "ruta-pyme": RutaPymeProjectPage,
  autosummit: AutosummitProjectPage,
  endolap: EndolapProjectPage,
  planapp: PlanappProjectPage,
  "huge-forest": HugeForestProjectPage,
  replavinos: ReplavinosProjectPage,
};

export function getProjectDetailComponent(slug) {
  return PROJECT_DETAIL_REGISTRY[slug] ?? StandardProjectDetailPage;
}
