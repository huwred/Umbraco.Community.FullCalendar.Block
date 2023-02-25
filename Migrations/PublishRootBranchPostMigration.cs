using System.Linq;
using Microsoft.Extensions.Logging;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Infrastructure.Migrations;

namespace FullCalendar.BlockItem.Migrations
{
    public class PublishRootBranchPostMigration : MigrationBase
    {
        private readonly ILogger<PublishRootBranchPostMigration> _logger;
        private readonly IContentService _contentService;

        public PublishRootBranchPostMigration(
            ILogger<PublishRootBranchPostMigration> logger,
            IContentService contentService,
            IMigrationContext context) : base(context)
        {
            _logger = logger;
            _contentService = contentService;
        }

        protected override void Migrate()
        {

        }
    }
}
