using System;
using Umbraco.Cms.Core.Packaging;
using Umbraco.Extensions;

namespace Umbraco.Community.FullCalendar.Block.Migrations
{
    public class FullCalendarPackageMigrationPlan : PackageMigrationPlan
    {
        public FullCalendarPackageMigrationPlan()
            : base("FullCalendar BlockItem")
        {
        }

        protected override void DefinePlan()
        {
            // calculate the final state based on the hash value of the embedded resource
            Type planType = GetType();
            var hash = PackageMigrationResource.GetEmbeddedPackageDataManifestHash(planType);

            var finalId = hash.ToGuid();
            To<ImportPackageXmlMigration>(finalId);


        }
    }
}
